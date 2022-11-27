// Top level imports
import { useState, ReactElement, useContext, SyntheticEvent } from 'react';

// App context
import { AppCtx } from '@/AppContext';

// Semantic UI
import { Segment, Header, Grid, Icon, Dropdown, Menu, Table, Container, Button as SButton } from 'semantic-ui-react';

// Atoms / Molecules / Organisms
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

// CSS
import './index.scss';

// Mock data
import { mockedPersons } from '@/utilities/mocks';

const DropdownExampleFilter = (): ReactElement => (
    <Dropdown
        text='Filter'
        icon='filter'
        floating
        labeled
        button
        className='icon'
    >
        <Dropdown.Menu>
            <Dropdown.Item
                label={{ color: 'red', empty: true, circular: true }}
                text='Important'
            />
            <Dropdown.Item
                label={{ color: 'blue', empty: true, circular: true }}
                text='Announcement'
            />
            <Dropdown.Item
                label={{ color: 'black', empty: true, circular: true }}
                text='Discussion'
            />
        </Dropdown.Menu>
    </Dropdown>
)

const DropdownExampleSort = (): ReactElement => {
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (
        <Menu compact className='sort-menu'>
            <Dropdown text='Dropdown' options={options} simple item />
        </Menu>
    )
}

const TableExamplePagination = (): ReactElement => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Mail</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {mockedPersons.map(({ _id, names, emailAddresses, phoneNumbers }): ReactElement => (
                <Table.Row key={_id}>
                    <Table.Cell>{ names[0].displayName }</Table.Cell>
                    <Table.Cell>{ phoneNumbers[0].value }</Table.Cell>
                    <Table.Cell>{ emailAddresses[0].value }</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>
                        <SButton.Group size='large'>
                            <Button icon color='red'>
                                <Icon name='trash'/>
                            </Button>
                            <SButton.Or />
                            <Button icon color='blue'>
                                <Icon name='edit' />
                            </Button>
                        </SButton.Group>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>

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
    </Table>
)

// Props type definitions
interface IProps {
    openSidebar: () => void;
}

// Component definition
export default function MainSection({ openSidebar }: IProps): ReactElement {
    // Global app context
    const appCtx = useContext(AppCtx);

    // State definitions
    const [searchKey, setSearchKey] = useState('');

    /** Handler function - starts */
    const openDrawer = (): void => {
        appCtx?.toggleDrawer();
    }

    const handleSearchKeyChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        setSearchKey((e.target as HTMLInputElement).value);
    }

    /** Handler function - starts */
    // Main JSX
    return (
        <>
            <Segment basic>
                {/** App top header section */}
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <Segment basic className='no-paddingX'>
                            <Header as="h2">
                                <Icon
                                    name='sidebar'
                                    className='sidebar-trigger'
                                    title='Open Sidebar'
                                    onClick={openSidebar}
                                />
                                Contacts
                            </Header>
                        </Segment>

                    </Grid.Column>

                    <Grid.Column className='align-right-md-up'>
                        <Segment className='no-padding' basic>
                            <Button
                                icon
                                color='green'
                                onClick={openDrawer}
                            >
                                <Icon name='add' />&nbsp;
                                New Contact
                            </Button>
                        </Segment>
                        &nbsp;&nbsp;
                    </Grid.Column>
                </Grid>

                {/** Filter and sorting section */}
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <Grid columns={2} stackable>

                            <Grid.Column>
                                <Segment className='no-padding' basic>
                                    <Input
                                        value={searchKey}
                                        onChange={handleSearchKeyChange}
                                        className='search-input'
                                        icon={
                                            <Icon
                                                name='search'
                                                link
                                            />
                                        }
                                        placeholder='Search...'
                                        size='small'
                                    />
                                </Segment>
                            </Grid.Column>

                            <Grid.Column>
                                <Segment basic className='no-padding'>
                                    <DropdownExampleFilter />
                                </Segment>
                            </Grid.Column>

                        </Grid>
                    </Grid.Column>

                    <Grid.Column className='align-right-md-up'>
                        <span>Sorting</span> &nbsp;
                        <DropdownExampleSort />
                    </Grid.Column>
                </Grid>
            </Segment>

            {/** Table containing contacts data */}
            <Container className='table-container'>
                <TableExamplePagination />
            </Container>
        </>
    );
};
