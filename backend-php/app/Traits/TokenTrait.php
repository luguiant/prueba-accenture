<?php

namespace App\Traits;

use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use Firebase\JWT\JWT;

trait TokenTrait{
    
    public function checkToken($hash){
        $oJwtAuth = new JwtAuth();
        return $oJwtAuth->checkToken($hash);
    }
    
}
