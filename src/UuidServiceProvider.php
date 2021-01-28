<?php

namespace AryehRaber\Uuid;

use AryehRaber\Uuid\Fieldtypes\Uuid;
use Statamic\Providers\AddonServiceProvider;

class UuidServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
       Uuid::class,
    ];

    protected $scripts = [
        __DIR__.'/../resources/dist/js/uuid-fieldtype.js',
    ];
}
