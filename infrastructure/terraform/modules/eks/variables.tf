variable "project_name" {
  description = "Name of the project"
  type        = string
}

variable "vpc_id" {
  description = "VPC ID"
  type        = string
}

variable "private_subnet_ids" {
  description = "List of private subnet IDs"
  type        = list(string)
}

variable "eks_cluster_role_arn" {
  description = "EKS Cluster Role ARN"
  type        = string
}

variable "eks_node_group_role_arn" {
  description = "EKS Node Group Role ARN"
  type        = string
}
