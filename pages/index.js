import dayjs from 'dayjs'
import Layout from '../components/Layout'
import useBlogPostList from '../hooks/useBlogPostList'

const Index = () => {
    var advancedFormat = require('dayjs/plugin/advancedFormat')
    dayjs.extend(advancedFormat)
    
    const [getBlogPosts, results] = useBlogPostList();
    
    return (
        <Layout>
            <div>
                {results.map((data, index) => (
                    <div key={data.id} className="card mb-3">
                        <img className="card-img-top" src="https://via.placeholder.com/1280x720" alt="testing"></img>
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <h6 className="card-subtitle">By {data.author} on {dayjs(data.date).format('Do MMMM YYYY')}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Index;