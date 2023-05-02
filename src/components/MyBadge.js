import Badge from 'react-bootstrap/Badge';

function MyBadge({ str, color }) {
    
    return (

        <Badge bg={color}>{str}</Badge>

    );
   
}

export default MyBadge