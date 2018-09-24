<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use App\Transformers\CreditsTransformer;

class Credit extends Model
{
    use SoftDeletes;

    const APPROVED_CREDIT = 'true';
    const CREDIT_NOT_APPROVED = 'false';
    
     public $transformer = CreditsTransformer::class;

    protected $table = 'credits';
    protected $dates = ['deleted_at'];
   // protected $with = ['users'];


    protected $fillable = [
        'name',
        'nit',
        'value',
        'dateString',
        'approved_balance',
        'status',
        'user_id'
    ];
    
    public function setNameAttribute($valor)
    {
        $this->attributes['name'] = strtolower($valor);
    }

    public function getNameAttribute($valor)
    {
        return ucwords($valor);
    }

   /* public function users()
    {
    	return $this->belongsToMany(User::class,'user_id');
    }*/
}
