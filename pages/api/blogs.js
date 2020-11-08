import nc from 'next-connect'
import dayjs from 'dayjs'
import middleware from '../../middleware/database'
import { ObjectID } from 'mongodb'

const handler = nc()
    .use(middleware)
    .get(async (req, res) => {
        let data = {
            "_id": new ObjectID(),
            "posts": [
                { "id": new ObjectID, "title": "Post #5", "author": "Stuart Harrison", "date": dayjs('2020-11-03') },
                { "id": new ObjectID, "title": "Post #4", "author": "Stuart Harrison", "date": dayjs('2020-10-10') },
                { "id": new ObjectID, "title": "Post #3", "author": "Stuart Harrison", "date": dayjs('2020-07-30') },
                { "id": new ObjectID, "title": "Post #2", "author": "Stuart Harrison", "date": dayjs('2020-06-15') },
                { "id": new ObjectID, "title": "Post #1", "author": "Stuart Harrison", "date": dayjs('2020-05-28') }
            ]
        }

        res.json(data);
    });

export default handler;

