import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import * as Products from "@/mocks/products.json" 
  
  export function Sessions() {
      console.log(Products.Products)
    return (
      <Table className="md:ml-4 md:w-2/3 border">
        <TableCaption>Table with all products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name of product</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Products.Products.map((Product: Session) => (
            <TableRow key={Product.id}>
              <TableCell className="font-medium">{Product.name}</TableCell>
              <TableCell>{Product.durationMinutes}</TableCell>
              <TableCell>{Product.price}</TableCell>
              <TableCell className="text-right">{Product.paymentFinalization}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
  export default Sessions;