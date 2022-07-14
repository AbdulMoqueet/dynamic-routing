import Link from "next/link"

const Products = () => {
    return (
        <div>

            <div className="grid">

                <Link href="/details/food-1">
                    <div className="grid__item">
                        <img src="/special__1.jpg" alt="" />
                        <div className="info">
                            <div className="title">Food 1</div>
                            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi deserunt, quo mollitia qui ratione aut unde delectus accusamus libero.</div>
                        </div>
                    </div>
                </Link>


                <Link href="/details/food-2">
                    <div className="grid__item">
                        <img src="/special__2.jpg" alt="" />
                        <div className="info">
                            <div className="title">Food 2</div>
                            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi deserunt, quo mollitia qui ratione aut unde delectus accusamus libero.</div>
                        </div>
                    </div>
                </Link>


                <Link href="/details/food-3">
                    <div className="grid__item">
                        <img src="/special__3.jpg" alt="" />
                        <div className="info">
                            <div className="title">Food 3</div>
                            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi deserunt, quo mollitia qui ratione aut unde delectus accusamus libero.</div>
                        </div>
                    </div>
                </Link>



            </div>

        </div>
    )
}

export default Products