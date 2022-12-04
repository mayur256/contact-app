// Top level imports
import { ReactElement, ReactNode } from 'react';

// Semantic UI
import { Icon, Menu, Table } from 'semantic-ui-react';

// Props type definitions
export interface ICustomTableProps {
    headers: Array<{ key: string, label: string }>;
    children: ReactNode | ReactNode[];
    pagination?: boolean
};

// Component definition
export default function CustomTable({
    headers,
    children,
    pagination = false
}: ICustomTableProps): ReactElement {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    {headers.map(({key, label}) => (
                        <Table.HeaderCell key={key}>{ label}</Table.HeaderCell>
                    ))}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {children}
            </Table.Body>

            {pagination && (
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            )}
        </Table>
    )
};
