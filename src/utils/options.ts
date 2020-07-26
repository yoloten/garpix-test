export const authorOptions = (authorsIDs: number[], authors: any) => {
    return authorsIDs.map(
        (id) => authors && { value: authors[id].id, label: `${authors[id].first_name} ${authors[id].last_name}` },
    )
}
