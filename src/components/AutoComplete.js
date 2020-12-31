import React from "react";
import ReactTags from "react-tag-autocomplete";

const TagAutocomplete = ({ input: { value, onChange } }) => {
    const suggestions = [
        { id: 1, name: "Java" },
        { id: 2, name: "PHP" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "Python" },
        { id: 5, name: "C" },
        { id: 6, name: "C++" },
        { id: 7, name: "C#" },
        { id: 8, name: "Ruby" },
        { id: 9, name: "React" },
        { id: 10, name: "Django" },
        { id: 11, name: "Spring" },
        { id: 12, name: "Bootstrap" }
    ];

    const newValue = !value
        ? []
        : value.map(id =>
            suggestions.find(({ id: sugestionId }) => id === sugestionId)
        );

    const handleDelete = i => {
        const tags = [...value];
        tags.splice(i, 1);
        onChange(tags);
    };

    const handleAdd = e => {
        onChange([...value, e.id]);
    };

    return (
        <div className="form-control mb-3 col-sm-10">
            <ReactTags
                
                tags={newValue}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAdd}
            />

        </div>

    );
};

export default TagAutocomplete;