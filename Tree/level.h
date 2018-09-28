//level order traversal of a BST

#include<stdio.h>
#include<stdio.h>
#define size 20

//node structure
struct _node{
	int data;
	struct _node *left;
	struct _node *right;
};


struct _node* queue[size]; //queue of pointer to nodes
int front=-1, rear=-1; //front and rear of queue



//function to enqueue 

void enqueue(struct _node *root){
	if(rear==size-1){
		printf("Queue is full");
	}
	else if(front==-1 && rear==-1){
		front++;
		rear++;
		queue[rear]=root;
	}
	else{
		rear++;
		queue[rear]=root;
	}
}



//function to dequeue

struct _node* dequeue(){
	if(front==-1){
		printf("Queue is empty");
	}
	else{
		return queue[front++];
	}
}



//function for level order traversal

void levelOrder(struct _node* root){
	while(root!=NULL){
		printf("%d ",root->data);
		if(root->left!=NULL){
			enqueue(root->left);
		}
		if(root->right!=NULL){
			enqueue(root->right);
		}
		root=dequeue();
	}
}


