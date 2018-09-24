<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    const aRules = [
            'name' => 'required|min:3|max:50',
            'lastname'=> 'required|min:3|max:50',
            'country' => 'required|min:3|max:50',
            'state_country' => 'required|min:3|max:50',
            'city' => 'required|min:3|max:50',
            'address' => 'required|min:10|max:50',
            'age'=>'required|numeric|min:18|max:120',
            'phone'=>'required|numeric|max:3999999999',
            'identification' => 'numeric|required',
            'email' => 'required|email|unique:users|confirmed',
            'email_confirmation' => 'required|sometimes|required_with:password',
            'password' => 'required|min:6|confirmed|regex:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/',
            'password_confirmation' => 'required|min:6|sometimes|required_with:password',
        ];
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    /*public function authorize()
    {
        return false;
    }*/

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    /*public function rules()
    {
        return [
            //
        ];
    }*/
}
