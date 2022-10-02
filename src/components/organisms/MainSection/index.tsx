// Top level imports
import { ReactElement } from 'react';

// Semantic UI
import { Segment, Header, Grid, Button, Icon, Input, Dropdown, Menu, Table } from 'semantic-ui-react';

// CSS
import './index.scss';

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
                <Table.HeaderCell>Groups</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Mail</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {Array.from(Array(60).keys()).map((key): ReactElement => (
                <Table.Row key={key}>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
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

// Component definition
export default function MainSection(): ReactElement {

    // Main JSX
    return (
        <Segment basic className='main-container'>
            {/** App top header section */}
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Segment basic className='no-padding'>
                            <Header as="h2">Contacts</Header>
                        </Segment>

                    </Grid.Column>

                    <Grid.Column
                        width={7}
                    >
                        <Segment className='no-padding' basic>
                            <Button icon color='green'>
                                <Icon name='add' />&nbsp;
                                New Contact
                            </Button>
                        </Segment>
                        &nbsp;&nbsp;
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/** Filter and sorting section */}
            <Grid columns={2} stackable>
                <Grid.Row className='no-padding'>
                    <Grid.Column width={3}>
                        <Segment className='no-padding' basic>
                            <Input
                                className='search-input'
                                icon='search'
                                placeholder='Search...'
                                size='small'
                            />
                        </Segment>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <Segment basic className='no-paddingY'>
                            <DropdownExampleFilter />
                        </Segment>
                        
                    </Grid.Column>

                    <Grid.Column width={9} className='sort-field'>
                        <span>Sorting: </span> &nbsp;
                        <DropdownExampleSort />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/** Table containing contacts data */}
            <Grid columns={1} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Segment basic className='no-padding table-container'>
                            <TableExamplePagination />
                       </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};
