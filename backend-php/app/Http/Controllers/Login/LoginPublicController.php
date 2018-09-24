<?php

namespace App\Http\Controllers\Login;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\JwtAuth;
use Firebase\JWT\JWT;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\ApiController;

class LoginPublicController extends ApiController
{
   
    public function __construct()
    {
        
    }
    
    public function store(Request $request)
    {   
        $oJwtAuth = new JwtAuth();
        $campos = $request->all();
        
        $this->validate($request, LoginRequest::aRules);
        
        $token = $oJwtAuth->signup($campos['email'],$campos['password']);
        
        if(isset($token['status']) && $token['status'] === 'error'){
            
           return $this->errorResponse([ 'error'=>'Email o contraseña no validos!'], 422);
            
        }else{
            
           return $this->showMessage(['token'=>$token], 200);
        }

        
    }

}
