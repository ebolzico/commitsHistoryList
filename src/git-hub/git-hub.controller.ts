import { Controller, Get } from '@nestjs/common';
import { GitHubService } from './git-hub.service';

@Controller('github')
export class GitHubController {
  constructor(private GitHubService: GitHubService) {}

  @Get()
  async getHistory() {   
    let response: any = await this.GitHubService.getHistory()
    console.log(response.data)
    return response.data
  }
}
