<?php

namespace App\Http\Controllers\Credits;

use App\Credit;
use Illuminate\Http\Request;
use App\Http\Requests\CreditRequest;
use App\Http\Controllers\ApiController;
use App\Helpers\JwtAuth;
use Firebase\JWT\JWT;

class CreditController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {   $oJwtAuth = new JwtAuth();
        $hash = $request->header('Authorization',null);
        
        if($oJwtAuth->checkToken($hash)){
            
            $token = $oJwtAuth->checkToken($hash,true);
         
            $creditos = Credit::where('user_id',$token->sub)->get();
            
            return $this->showAll($creditos);
        }else{
            return $this->errorResponse(
                        [ 'error'=>'El token no es valido!'], 422);
        }
        
        
        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, CreditRequest::aRules, CreditRequest::aMsn);
        
        $oJwtAuth = new JwtAuth();
        
        $campos = $request->all();
        
        if($oJwtAuth->checkToken($campos['token'])){
            
            $token = $oJwtAuth->checkToken($campos['token'],true);
            $campos['user_id'] = $token->sub;
            
            if(isset($campos['date'])){
                unset($campos['date']);
            }
            if(isset($campos['token'])){
                unset($campos['token']);
            }
            
            if($campos['value'] >= 800000 && $campos['value'] <= 1000000 ){
                $campos['approved_balance'] = 5000000;
                $campos['status'] = 'true';
            }else if($campos['value'] > 1000000 && $campos['value'] <= 4000000 ){
                $campos['approved_balance'] = 20000000;
                $campos['status'] = 'true';
            }else if($campos['value'] > 4000000){
                $campos['approved_balance'] = 50000000;
                $campos['status'] = 'true';
            }
            
        }else{
             return $this->errorResponse(
                        [ 'error'=>'El token no es valido!'], 422);
        }
        
        $credit = Credit::create($campos);
        
        return $this->showOne($credit, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
