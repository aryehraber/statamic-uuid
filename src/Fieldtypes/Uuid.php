<?php

namespace SeriesEight\Uuid\Fieldtypes;

use Statamic\Fields\Fieldtype;

class Uuid extends Fieldtype
{
    protected $icon = 'code';

    protected $configFields = [
        'prefix' => [
            'type' => 'text',
            'default' => '',
            'instructions' => 'Add a default prefix to the UUID.',
            'width' => 50,
        ],
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
