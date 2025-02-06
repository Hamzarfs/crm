<?php

use App\Models\Email;
use App\Models\EmailLabel;
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
        $emailTypes = [
            'received',
            'sent',
            'draft'
        ];

        Schema::create('emails', function (Blueprint $table) use ($emailTypes) {
            $table->id();
            $table->enum('type', $emailTypes);
            $table->string('to_name')->nullable();
            $table->string('to_email')->nullable();
            $table->string('from_name')->nullable();
            $table->string('from_email')->nullable();
            $table->string('cc')->nullable();
            $table->string('bcc')->nullable();
            $table->string('subject')->nullable();
            $table->text('message')->nullable();
            $table->boolean('is_starred')->default(false);
            $table->boolean('is_trashed')->default(false);
            $table->boolean('is_spam')->default(false);
            $table->foreignIdFor(EmailLabel::class, 'label_id')->nullable()->constrained('email_labels')->nullOnDelete();
            $table->foreignIdFor(Email::class, 'parent_id')->constrained('emails')->restrictOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('emails');
    }
};
