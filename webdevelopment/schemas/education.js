export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "program",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "educationType",
            title: "Process of Education",
            type: "string",
            options: {
                list: [
                  { value: "Progress", title: "In-Progress"},
                  { value: "Graduated", title: "Graduated"},
                    
                ],
                
            },
        },
    ],
};