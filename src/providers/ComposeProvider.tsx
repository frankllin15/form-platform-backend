interface Props {
    with: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
    children: React.ReactNode
}

export function ComposeProviders({with: providers, children}: Props) {

    return (
        <>
            {providers.reduceRight((acc, Comp) => {
                return <Comp>{acc}</Comp>
            }, children)}
        </>
    )
}
