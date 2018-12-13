## Setup

1) Firstly, copy `Uuid` into `site/addons/`.

2) Well, this is awkward... there's no step 2.

## Usage

Inside your fieldset, simply use `type: uuid` and a UUID will be generated for that field if it's blank. Already occupied fields (including previously generated UUIDs) will not be overwritten.

#### Settings

| Name | Default | Description |
|------|---------|-------------|
| `hidden` | `false` | Hide the field from the CP while still generating a UUID. |
| `readonly` | `false` | Set the input to readonly, stopping the user from editing the field. |
