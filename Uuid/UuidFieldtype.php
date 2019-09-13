<?php

namespace Statamic\Addons\Uuid;

use Statamic\API\Str;
use Statamic\Extend\Fieldtype;

class UuidFieldtype extends Fieldtype
{
    public $category = ['special'];

    /**
     * The blank/default value
     *
     * @return array
     */
    public function blank()
    {
        return null;
    }

    /**
     * Pre-process the data before it gets sent to the publish page
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        return $data;
    }

    /**
     * Process the data before it gets saved
     *
     * @param mixed $data
     * @return array|mixed
     */
    public function process($data)
    {
        // if there's a prefix in the config && there's no prefix in the data, then add it
        $prefix = $this->getFieldConfig('prefix', null);

        if ($prefix && !Str::startsWith($data, $prefix)) {
            return $prefix . $data;
        }

        return $data;
    }
}
