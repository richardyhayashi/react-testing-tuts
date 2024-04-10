const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "John",
                    last: "Doe"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/82.jpg",
                },
                login: {
                    username: "jkadfhjkadjfhkerjkn",
                }
            }
        ]
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(mockResponse),
}