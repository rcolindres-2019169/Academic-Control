import { checkUpdate } from '../utils/validator.js'
import Course from './course.model.js'

export const save = async(req, res)=>{
    try{
        let data = req.body
        let course = new Course(data)
        await course.save() 
        return res.send({message: `Registered successfully ${course.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering course', err: err})
    }
}

export const update = async (req, res) => {
    try {
        let data = req.body
        let { id } = req.params
        let update = checkUpdate(data, false)
        if (!update) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data' })
    let updatedCourse = await Course.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
        )
        if(!updatedCourse) return res.status(404).send({message: 'Course not found and not updated'})
        //Responder si todo sale bien
        return res.send({message: 'Course updated successfully', updatedCourse})
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating course' })
    }
}

export const deleteA = async(req, res)=>{
    try{
        let { id } = req.params
        let deletedCourse = await Course.deleteOne({_id: id})
        if(deletedCourse.deletedCount === 0) return res.status(404).send({message: 'Course not found and not deleted'})
        return res.send({message: 'Deleted course successfully'})
    }catch(err){
        console.error(err)
        return res.status(404).send({message: 'Error deleting couse'})
    }
}