<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    const aRules = [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ];
}
