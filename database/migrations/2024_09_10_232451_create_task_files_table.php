<?php

use App\Models\Task;
use App\Models\TaskComment;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('task_files', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['task', 'comment']);
            $table->foreignIdFor(Task::class)->nullable()->constrained()->noActionOnDelete()->noActionOnUpdate();
            $table->foreignIdFor(TaskComment::class)->nullable()->constrained()->noActionOnDelete()->noActionOnUpdate();
            $table->string('file');
            $table->foreignIdFor(User::class, 'uploaded_by')->nullable()->constrained('users')->noActionOnDelete()->noActionOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_files');
    }
};
