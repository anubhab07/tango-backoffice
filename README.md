# tango-backoffice

This module is a General knowledge module which contains the information related to various topics with their contexts. This module interacts with tango-secetary and passes the context to it for a specific topic when asked about it.

## Endpoints

Base URL: http://104.196.42.113:3000

1. ```GET /gk/list_all``` <br>
result: 
```
{
    'count': 6,
    'topics': [
        'bhubaneswar',
        'hockey_world_cup',
        'leonardo_da_vinci',
        'narayana_murthy',
        'operating_system',
        'steve_jobs'
    ]
}
```

2. ```GET /gk/<topic_name>```<br>
result: 
```<topic_content>```