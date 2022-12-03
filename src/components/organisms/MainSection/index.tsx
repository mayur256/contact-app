// Top level imports
import { useState, ReactElement, useContext, SyntheticEvent } from 'react';

// App context
import { AppCtx } from '@/AppContext';

// Semantic UI
import { Segment, Header, Grid, Icon, Menu, Table, Container, Button as SButton, DropdownProps } from 'semantic-ui-react';

// Atoms / Molecules / Organisms
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Dropdown, { IDropdownProps } from '@/components/molecules/Dropdown';

// CSS
import './index.scss';

// Mock data
import { mockedPersons } from '@/utilities/mocks';

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

// definition for sorting dropdown component

const DropdownExampleSort = ({options, text, onChange}: IDropdownProps): ReactElement => (
    <Dropdown
        text={text}
        options={options}
        onChange={onChange}
        simple
        item
    />
);

// Props type definitions
interface IProps {
    openSidebar: () => void;
}

// Component definition
export default function MainSection({ openSidebar }: IProps): ReactElement {
    // Global app context
    const appCtx = useContext(AppCtx);
    // Constants
    const sortOptions = [
        { text: 'Name', value: 'name' },
        { text: 'Phone', value: 'phone' },
        { text: 'Email', value: 'email' },
    ];

    // State definitions
    const [searchKey, setSearchKey] = useState('');
    const [sortContactsKey, setSortContactsKey] = useState<{text: string, value: string}>(sortOptions[0]);

    /** Handler function - starts */
    const openDrawer = (): void => {
        appCtx?.toggleDrawer();
    }

    const handleSearchKeyChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        setSearchKey((e.target as HTMLInputElement).value);
    }

    const handleSortChange = (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps): void => {
        const selectedOption = sortOptions.find((opt) => opt.value === data.value);
        if (selectedOption) {
            setSortContactsKey(selectedOption);
        }
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
                                    {/* <DropdownExampleFilter /> */}
                                </Segment>
                            </Grid.Column>

                        </Grid>
                    </Grid.Column>

                    <Grid.Column className='align-right-md-up'>
                        <span>Sorting</span> &nbsp;
                        <DropdownExampleSort
                            onChange={handleSortChange}
                            options={sortOptions}
                            text={sortContactsKey.text}
                        />
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
