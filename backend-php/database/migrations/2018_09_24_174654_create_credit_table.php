<?php

use App\Credit;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCreditTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('credits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('value')->nullable();
            $table->string('dateString')->nullable();
            $table->string('nit')->nullable();
            $table->string('approved_balance')->nullable();
            $table->integer('user_id',false,false);
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('status')->default(Credit::APPROVED_CREDIT);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credits');
    }
}
