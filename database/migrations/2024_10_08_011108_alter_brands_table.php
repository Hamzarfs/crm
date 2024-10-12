<?php

use App\Models\Currency;
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
        Schema::table('brands', function (Blueprint $table) {
            $table->after('name', function (Blueprint $table) {
                $table->string('url')->nullable();
                $table->string('fb_url')->nullable();
                $table->string('ig_url')->nullable();
                $table->string('phone')->nullable();
                $table->string('whatsapp')->nullable();
                $table->string('chat_support')->nullable();
                $table->string('country');
                $table->foreignIdFor(Currency::class)->constrained()->restrictOnDelete();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('brands', function (Blueprint $table) {
            $table->dropColumn([
                'url',
                'fb_url',
                'ig_url',
                'phone',
                'whatsapp',
                'chat_support',
                'country'
            ]);
            $table->dropConstrainedForeignIdFor(Currency::class);
        });
    }
};
