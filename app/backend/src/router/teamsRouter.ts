import { Router } from 'express';
import ListController from '../controller/teamsController';

const teamsRouter = Router();

teamsRouter.get('/', ListController.getTeams);
teamsRouter.get('/:id', ListController.getTeamsId);

export default teamsRouter;
