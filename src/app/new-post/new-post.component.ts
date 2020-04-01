import { Component, OnInit } from '@angular/core';
import { PostServiceService } from "../post-service.service";
import { Router } from '@angular/router'
import { BlogPost } from '../BlogPost'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost()
  tags: string = ""

  constructor(private postService: PostServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim())
    this.blogPost.isPrivate = false
    this.blogPost.postDate = new Date().toLocaleDateString()
    this.blogPost.postedBy = "WEB422 Student"
    this.blogPost.views = 0
    this.postService.newPost(this.blogPost).subscribe(() => {
      this.router.navigate(['admin'])
    })
  }
}
