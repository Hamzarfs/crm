<?php

namespace App\Services\Employee;

use App\Models\Employee\Document;
use App\Models\User;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class DocumentService
{
    function uploadDocuments(User $user, array $filesArray)
    {
        DB::beginTransaction();

        try {
            foreach ($filesArray as $type => $files) {
                $i = $user->countDocument($type);
                $directory = "employees/documents/$user->name";
                foreach ($files as $file) {
                    $name = sprintf("%s-%d.%s", $type, ++$i, $file->clientExtension());
                    $path = $file->storeAs($directory, $name);
                    $user->documents()->create([
                        'name' => $name,
                        'type' => $type,
                        'path' => "storage/$path"
                    ]);
                }
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            Log::error($th->getMessage());
            Log::error($th->getTraceAsString());
            throw $th;
        }

        DB::commit();
    }
}
