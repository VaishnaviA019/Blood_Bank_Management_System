import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import API from "../../services/API";
import moment from "moment";

const Donar = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            if (user?.role === "admin") {
                const { data } = await API.get("/inventory/get-donars");
                //   console.log(data);
                if (data?.success) {
                    setData(data?.donars);
                }
            }
            if (user?.role === "hospital") {
                const { data } = await API.get("/inventory/get-donars-for-hospital");
                //   console.log(data);
                if (data?.success) {
                    setData(data?.donars);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, [user]);

    return (
        <Layout>
            <div className="container mt-4">
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.name}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Donar;