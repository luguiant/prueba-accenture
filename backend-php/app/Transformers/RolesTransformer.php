<?php

namespace App\Transformers;

use App\Roles;
use League\Fractal\TransformerAbstract;

class RolesTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Roles $oRoles)
    {
        $data['id_row'] = (int)$oRoles->id;
        
        $data = [
            'identificador' => (string)$oRoles->internal_url,
            'nombre' => (string)$oRoles->name,
            'permisos' => (int)$oRoles->level_access,
            'fechaCreacion' => (string)$oRoles->created_at,
            'fechaActualizacion' => (string)$oRoles->updated_at,
            'fechaEliminacion' => isset($user->deleted_at) ? (string) $user->deleted_at : null,
        ];

        return $data;
    }

    public static function originalAttribute($index)
    {
        $attributes['id_row'] = 'id';
        $attributes = [
            'identificador' => 'internal_url',
            'nombre' => 'name',
            'permisos' => 'level_access',
            'fechaCreacion' => 'created_at',
            'fechaActualizacion' => 'updated_at',
            'fechaEliminacion' => 'deleted_at',
        ];

        return isset($attributes[$index]) ? $attributes[$index] : null;
    }

    public static function transformedAttribute($index)
    {
        $attributes['id'] ='id_row';

        $attributes = [
            'internal_url' => 'identificador',
            'name' => 'nombre',
            'level_access' => 'permisos',
            'created_at' => 'fechaCreacion',
            'updated_at' => 'fechaActualizacion',
            'deleted_at' => 'fechaEliminacion'
        ];

        return isset($attributes[$index]) ? $attributes[$index] : null;
    }
}
