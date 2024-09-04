<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\Login as LoginRequest;
use App\Http\Requests\Auth\Register as RegisterRequest;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class AuthController extends Controller
{
    /**
     * Create user
     */
    public function register(RegisterRequest $request)
    {
        $data = (object)$request->validated();

        $user = new User([
            'name'  => $data->name,
            'email' => $data->email,
            'password' => bcrypt($data->password),
        ]);

        if ($user->save()) {
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            return response()->json([
                'message' => 'Successfully created user!',
                'accessToken' => $token,
            ], 201);
        } else {
            return response()->json(['error' => 'Provide proper details']);
        }
    }

    /**
     * Login user and create token
     */

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            $errors = [];
            if (User::where('email', $credentials['email'])->exists()) {
                $errors['password'] = __('auth.password');
            } else {
                $errors['email'] = __('auth.failed');
            }
            return response()->json([
                'errors' => $errors
            ], 401);
        }

        /**
         * @var User
         */
        $user = Auth::user();
        $user->load('roles');
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        return response()->json([
            'accessToken' => "Bearer $token",
            'userData' => new UserResource($user)
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        $user = $request->user();
        $user->load('roles');
        return response()->json(new UserResource($user));
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
}
