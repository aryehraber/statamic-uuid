<?php

namespace AryehRaber\Uuid\Fieldtypes;

use Statamic\Fields\Fieldtype;

class Uuid extends Fieldtype
{
    protected $icon = 'code';

    protected $configFields = [
        'hidden' => [
            'type' => 'toggle',
            'default' => false,
            'instructions' => 'Enable to hide field from Entry create/edit view.',
            'width' => 50,
        ],
        'readonly' => [
            'type' => 'toggle',
            'default' => false,
            'instructions' => 'Enable to make the field readonly.',
            'width' => 50,
        ],
        'id_prefix' => [
            'type' => 'text',
            'default' => '',
            'instructions' => 'Add a default prefix to the ID.',
            'width' => 50,
        ],
        'id_type' => [
            'type' => 'select',
            'default' => 'uuid',
            'options' => ['uuid', 'nanoid'],
            'instructions' => 'Set the underlying ID generator.',
            'width' => 33,
        ],
        'alphabet' => [
            'type' => 'text',
            'default' => null,
            'instructions' => 'Set a custom alphabet when using `nanoid`.',
            'width' => 33,
            'if' => ['id_type' => 'nanoid'],
        ],
        'size' => [
            'type' => 'integer',
            'default' => null,
            'instructions' => 'Set the max character limit when using `nanoid`.',
            'width' => 33,
            'if' => ['id_type' => 'nanoid'],
        ],
    ];

    /**
     * The blank/default value.
     *
     * @return array
     */
    public function defaultValue()
    {
        return null;
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved.
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data;
    }
}
