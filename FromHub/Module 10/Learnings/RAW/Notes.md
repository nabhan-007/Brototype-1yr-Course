# MongoDB Notes

## MongoDB: Introduction

- MongoDB is a `document` database. It stores data in a type of `JSON` format called `BSON`.
- A record in MongoDB is a document, which is a data structure composed of `key value pairs` similar to the structure of JSON objects.
- Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.

```JSON
{
	title: "Post Title 1",
	body: "Body of post.",
	category: "News",
	likes: 1,
	tags: ["news", "events"],
	date: Date()
}
```

## JSON (JavaScript Object Notation)

- JSON data is written as name/value pairs.
- JSON is language independent.
- Example:

```JSON
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

- Property names must be enclosed in double quotes.
- JSON Does Not Allow:
  - Comments
  - Single quoted strings
  - Unquoted property names
  - Trailing commas
  - Functions
  - undefined
- Properties containing undefined, functions, or symbols are omitted from objects.

- JSON vs XML:
  - JSON and XML are text formats used to store and exchange structured information.
  - JSON is commonly used for data exchange in web applications.
  - XML is commonly used for documents, configuration files, and established data formats.
  - JSON and XML solve some of the same problems, but they use different structures.
  - Neither format is best for every situation.
  - JSON Example:

    ```JSON
    {
        "employees": [
            {"firstName":"John", "lastName":"Doe"},
            {"firstName":"Anna", "lastName":"Smith"},
            {"firstName":"Peter", "lastName":"Jones"}
        ]
    }
    ```

  - XML Example:

    ```XML
    <employees>
    <employee>
        <firstName>John</firstName>
        <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName>
        <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName>
        <lastName>Jones</lastName>
    </employee>
    </employees>
    ```

  - JavaScript can parse XML text with the DOMParser object:

    ```JavaScript
    // XML text
    const text = "<person><name>John</name></person>";

    // Parse the XML text
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    // Extract name using DOM method
    const name = xmlDoc.getElementsByTagName("name")[0].textContent;
    ```

  - The parsed XML becomes a document that can be accessed with DOM methods.
  - XML documents can be validated with formats such as DTD and XML Schema.
  - JSON documents can be validated with JSON Schema.

  - When to Use JSON:
    JSON is a good choice for:
    - Web APIs
    - Sending application data
    - Configuration files
    - Data stored by JavaScript applications
    - Data structures based on objects and arrays

  - When to Use XML:
    XML is a good choice for:
    - Content containing both text and markup
    - Systems based on XML schemas and namespaces
    - Existing applications that already use XML
    - Established XML-based storage systems

## MongoDB: Getting Started

- MongoDB is a document database and can be installed locally or hosted in the cloud.

- #### SQL vs Document Databases
  - `SQL databases` are considered `relational databases`. They store related data in `separate tables`. When data is needed, it is queried from multiple tables to join the data back together.
  - `MongoDB` is a document database which is often referred to as a `non-relational database`. This does not mean that relational data cannot be stored in document databases. It means that `relational data` is `stored differently`. A better way to refer to it is as a `non-tabular database`.
  - MongoDB stores data in `flexible documents`. Instead of having multiple tables you can simply keep all of your related data together. This makes `reading` your data `very fast`.
  - You can still have multiple groups of data too. In `MongoDB`, `instead of tables` these are called `collections`.
- #### The Hierarchy:
  Database ───── holds ────→ Collections ──── hold ────→ Documents ──── have ────→ Fields
