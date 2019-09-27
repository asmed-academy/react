export type RxTestsOuterProps = {
    data: string[]
}

export type RxTestsInnerProps = {
    query: string;
    onChangeQuery: (query: string) => void;
    matchingItems: string[];
} & RxTestsOuterProps;

