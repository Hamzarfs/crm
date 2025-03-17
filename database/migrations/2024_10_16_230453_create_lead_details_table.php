<?php

use App\Models\Lead;
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
        Schema::create('lead_details', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Lead::class)->constrained();
            $table->foreignIdFor(User::class, 'agent_id')->constrained('users');
            $table->string('contact_status')->nullable();
            $table->string('notes')->nullable();
            $table->string('follow_up')->nullable();
            $table->string('final_status')->nullable();
            $table->timestamp('final_status_date')->nullable();
            $table->string('call_status')->nullable();
            $table->timestamp('call_date')->nullable();
            $table->string('email_status')->nullable();
            $table->timestamp('email_date')->nullable();
            $table->string('sms_status')->nullable();
            $table->timestamp('sms_date')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lead_details');
    }
};
