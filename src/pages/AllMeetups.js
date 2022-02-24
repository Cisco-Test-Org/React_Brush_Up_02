import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is first meetup',
        image: 'https://blog.designveloper.com/wp-content/uploads/2016/07/meetup-groups-for-programmer5.jpeg',
        address: '902 McKinley Avenue, Denver.',
        description: 'This is the first meetup and it is amazing meetup with the new friends. You should never miss the oppertunity.'
    },
    {
        id: 'm2',
        title: 'This is second meetup',
        image: 'https://miro.medium.com/max/1400/1*13WHRK2HAsEx3j0ePczkcA.jpeg',
        address: '4096 Saints Alley, Tampa.',
        description: 'This is the second meetup and it is amazing meetup with the new friends. You should never miss the oppertunity.'
    },
    {
        id: 'm3',
        title: 'This is Third meetup',
        image: 'https://qph.fs.quoracdn.net/main-qimg-3a9af64d1f9d29ffd2b93777d2400d3a.webp',
        address: '1832 Eden Drive, Richmond.',
        description: 'This is the Third meetup and it is amazing meetup with the new friends. You should never miss the oppertunity.'
    },
    {
        id: 'm4',
        title: 'This is fourth meetup',
        image: 'https://media.npr.org/assets/img/2014/01/25/studentrnd_custom-a17fbca811c4e77f7beeec97590a858c74de8ad8-s1100-c50.jpg',
        address: '4090 New Street, Eugene.',
        description: 'This is the fourth meetup and it is amazing meetup with the new friends. You should never miss the oppertunity.'
    },
    {
        id: 'm5',
        title: 'This is fifth meetup',
        image: 'https://secure.meetupstatic.com/photos/event/b/e/5/9/600_463248729.jpeg',
        address: '3112 Oliver Street, Arlington.',
        description: 'This is the fifth meetup and it is amazing meetup with the new friends. You should never miss the oppertunity.'
    }
]

function AllMeetupsPage(){
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )

}

export default AllMeetupsPage;