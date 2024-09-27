<?php

use App\Models\Lead;
use App\Models\Service;
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
        Schema::create('leads_sold_services', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Lead::class)->constrained();
            $table->foreignIdFor(Service::class)->constrained()->restrictOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leads_sold_services');
    }
};
