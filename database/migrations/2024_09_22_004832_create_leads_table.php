<?php

use App\Models\{Brand, Customer, LeadSource, Service};
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
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Customer::class)->constrained()->restrictOnDelete();
            $table->foreignIdFor(LeadSource::class)->constrained()->restrictOnDelete();
            $table->foreignIdFor(Brand::class)->constrained()->restrictOnDelete();
            $table->foreignIdFor(Service::class)->constrained()->restrictOnDelete();
            $table->string('status');
            $table->text('remarks')->nullable();
            $table->unsignedInteger('lead_closed_amount')->nullable();
            $table->date('lead_closed_date')->nullable();
            $table->unsignedInteger('upsell_amount')->nullable();
            $table->date('upsell_date')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
