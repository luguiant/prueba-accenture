<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use App\Helpers\JwtAuth;
use Firebase\JWT\JWT;

class AuthUserController extends ApiController
{
    
    public function store(Request $request)
    {
        $oJwtAuth = new JwtAuth();
        $campos = $request->all();
        
        $oJwtAuth = new JwtAuth();
        
        if($oJwtAuth->checkIdentity($campos['token'])){
         
               return response()->json(true,200);
        }
        return response()->json(false,200);
    }

    
}
