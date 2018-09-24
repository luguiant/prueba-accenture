<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Traits;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Illuminate\Pagination\LengthAwarePaginator;

trait InputsTrait
{
    public function processResquest($aJson){
        $aParams = json_decode($aJson);
        $aParamsArray = [];
        foreach ($aParams as $sKey => $mValue){
            $aParamsArray[$sKey] = $mValue;
        }
        return  [
                    'aParams'=>$aParams,
                    'aParamsArray'=>$aParamsArray
                ];
    }
}
    