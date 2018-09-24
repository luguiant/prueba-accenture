<?php

namespace App\Transformers;

use App\Credit;
use League\Fractal\TransformerAbstract;

class CreditsTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Credit $oCredit)
    {
        
        $data = [
            'identificador' => (int)$oCredit->id,
            'nombre' => (string)$oCredit->name,
            'nit' => (string)$oCredit->nit,
            'fecha_ingreso' => (string)$oCredit->dateString,
            'salarario' => (string)$oCredit->value,
            'valor_aprovado' => (string)$oCredit->approved_balance,
            'estado' => isset($oCredit->deleted_at) ? $oCredit->status === 'true':'Aprovado' ,
            'fechaCreacion' => (string)$oCredit->created_at,
            'fechaActualizacion' => (string)$oCredit->updated_at,
            'fechaEliminacion' => isset($oCredit->deleted_at) ? (string) $oCredit->deleted_at : null,
        ];

        return $data;
    }

    public static function originalAttribute($index)
    {
       
        $attributes = [
            'identificador' => 'id',
            'nombre' => 'name',
            'nit' => 'nit',
            'fecha_ingreso' => 'dateString',
            'salario' => 'value',
            'valor_aprovado' => 'approved_balance',
            'estado' => 'status',
            'fechaCreacion' => 'created_at',
            'fechaActualizacion' => 'updated_at',
            'fechaEliminacion' => 'deleted_at',
        ];

        return isset($attributes[$index]) ? $attributes[$index] : null;
    }

    public static function transformedAttribute($index)
    {
        

        $attributes = [
            'id' => 'identificador',
            'name' => 'nombre',
            'nit' => 'nit',
            'dateString' => 'fecha_ingreso',
            'value' => 'salario',
            'approved_balance' => 'valor_aprovado',
            'status'=>'estado',
            'created_at' => 'fechaCreacion',
            'updated_at' => 'fechaActualizacion',
            'deleted_at' => 'fechaEliminacion'
        ];

        return isset($attributes[$index]) ? $attributes[$index] : null;
    }
}
