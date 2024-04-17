# Type React SDK

## Installation

`npm install --save @typecms-sdk/react-sdk`

## Quick start

```
import { useContent } from '@typecms-sdk/react-sdk'

export default function Page() => {

    // authenticate via the useContent hook
    const typesdk = useContent({
        baseUrl: BASE_URL_OF_THE_API, // ex: https://domain.com, http://localhost:3000
        projectId: PROJECT_ID,
        token: CONTENT_TOKEN_FROM_PROJECT
    })

    // fetch content
    const content = await typesdk.getEntries({
        // parameters to fetch content against, these are just examples
        language: 'EN-US',
        ...
    })

    if(typesdk.isLoading) return <>Loading...</>

    return (
        // do something with your content here
    )

}

```

The useContent hook returns the following items:

- **isLoading**: boolean
- **isLoaded**: boolean
- **content**: array of entries
- **getEntries**: function to fetch entries with given parameters
