# Uuid

**One of its kind; unlike anything else**

This fieldtype auto-generates UUIDs for empty fields. This can be useful if you need unique, persistent IDs for each row in a Replicator, for example.

### Example:

**Fieldset**

```yaml
sections:
  type: replicator
  sets:
    section:
      fields:
        id:
          type: uuid
        fields:
          type: replicator
          sets:
            value:
              fields:
                id:
                  type: uuid
```

**Output**

```yaml
sections:
  -
    type: section
    id: 026fd166-8638-4c21-9e38-730b4ab3d4ea
    fields:
      -
        type: value
        id: b07389fe-8760-4f81-8c35-50779bd43b61
  -
    type: section
    id: 4a7ce0b0-0483-42d9-a7b0-ce0201dd9c84
    fields:
      -
        type: value
        id: b07389fe-8760-4f81-8c35-50779bd43b61
      -
        type: value
        id: 5a7534a8-27bf-4ac6-8549-d3b429a61ff3
```
