<?php

namespace Statamic\Addons\Uuid;

use Statamic\Extend\Listener;

class UuidListener extends Listener
{
    public $events = [
        'cp.add_to_head' => 'addToHead'
    ];

    public function addToHead()
    {
        return $this->js->tag('uuidv4.js');
    }
}
