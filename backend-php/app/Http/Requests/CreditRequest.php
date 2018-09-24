<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreditRequest extends FormRequest
{
     const aRules = [
            'nit' => 'required|numeric|min:10000000|max:99999999',
            'value' => 'required|numeric|min:800|max:10000000',
            'name' => 'required|min:3|max:50',
            'dateString' => 'required|date|date_format:"d/m/Y"',
            'token' => 'required'
        ];
     
     const aMsn = [
        'nit.required' => 'El nit es requerido',
        'nit.numeric' => 'El nit edebe ser numerico',
        'nit.min' => 'El nit es minimo 10000000',
        'nit.max' => 'El nit es maximo 99999999',
        'value.required' => 'El salario es requerido',
        'value.numeric' => 'El salario es numerico',
        'value.min' => 'El salario es de minimo 800000',
        'value.max' => 'El salario es maximo de 10000000',
        'name.required' => 'El nombre de la empresa es requerido',
        'name.min' => 'El nombre de la empresa es de minimo 3 caracteres',
        'name.max' => 'El nombre de la empresa ede maximo 50 caracteres',
        'dateString.required' => 'La fecha de ingreso es requerida',
        'dateString.date' => 'EL valor de la fecha no es valido',
        'dateString.date_format' => 'La fecha no tiene un formato valido',
        'token.required' => ''
     ];
}
