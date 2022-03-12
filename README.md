# Uuid (Statamic 3)

**One of its kind; unlike anything else**

This fieldtype auto-generates UUIDs for empty fields. This can be useful if you need unique, persistent IDs for each row in a Replicator, for example.

## Installation

Install the addon via composer:

```
composer require aryehraber/statamic-uuid
```

Publish the fieldtype assets:

```
php artisan vendor:publish --provider="AryehRaber\Uuid\UuidServiceProvider"
```

## Usage

Inside your blueprint, simply use `type: uuid` and a UUID will be generated for that field if it's blank. Already occupied fields (including previously generated UUIDs) will not be overwritten.

#### Settings

| Name | Default | Description |
|------|---------|-------------|
| `hidden` | `false` | Hide the field from the CP while still generating a UUID. |
| `read_only` | `false` | Set the input to read-only, stopping the user from editing the field. |
| `id_prefix` | `''` | Add a prefix to the ID. |
| `id_type` | `uuid` | Set the underlying ID generator, options: `uuid` & `nanoid`. |
| `alphabet` | `null` | Set a custom alphabet when using `nanoid`. |
| `size` | `null` | Set the max character limit when using `nanoid`. |

### Example:

**Blueprint**

```yaml
fields:
  -
    handle: sections
    field:
      type: replicator
      sets:
        section:
          fields:
            -
              handle: uuid
              field:
                type: uuid
            -
              handle: fields
              field:
                type: replicator
                sets:
                  value:
                    fields:
                      -
                        handle: uuid
                        field:
                          type: uuid
                          id_type: nanoid
                          alphabet: ABCD1234
                          size: 5
```

**Output**

```yaml
sections:
  -
    uuid: 026fd166-8638-4c21-9e38-730b4ab3d4ea
    type: section
    fields:
      -
        uuid: A4C11
        type: value
  -
    uuid: 4a7ce0b0-0483-42d9-a7b0-ce0201dd9c84
    type: section
    fields:
      -
        uuid: B1CB3
        type: value
      -
        uuid: 41CD1
        type: value
```

## Credits

Originally built at [Series Eight](https://github.com/serieseight), now maintained by [Aryeh Raber](https://github.com/aryehraber).
